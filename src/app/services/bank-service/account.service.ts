import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ApiRoutes } from '../api-routes';
import { HttpClient } from '@angular/common/http';
import { DomesticAccountDto } from '../../dtos/domestic-account-dto';
import { ForeignAccountDto } from '../../dtos/foreign-account-dto';
import { BusinessAccountDto } from '../../dtos/business-account-dto';
import { AccountDto } from '../../dtos/account-dto';
import { map } from 'rxjs/operators';
import { DepositWithdrawalDto } from 'src/app/dtos/deposit-withdrawal-dto';

@Injectable({
	providedIn: 'root',
})
export class AccountService {
	constructor(private httpClient: HttpClient) {}

	// GET
	getFindByEmail(email: string) {
		return this.httpClient.get<AccountDto[]>(
			`${environment.bankServiceApiUrl}${ApiRoutes.account.findAccountsByEmail}/${email}`,
		);
	}

	getFindBankAccounts() {
		return this.httpClient.get<AccountDto[]>(
			`${environment.bankServiceApiUrl}${ApiRoutes.account.cashAccountState}`,
		);
	}

	// POST
	postAssociateProfileInitialization(accountNumber: string) {
		return this.httpClient.post<boolean>(
			`${environment.bankServiceApiUrl}${ApiRoutes.account.associateProfileInitialization}`,
			{
				accountNumber: accountNumber,
			},
		);
	}

	postCodeConfirmation(code: string, accountNumber: string) {
		return this.httpClient.post<boolean>(
			`${environment.bankServiceApiUrl}${ApiRoutes.account.confirmActivationCode}/${accountNumber}`,
			code,
		);
	}

	postCreateDomesticAccount(domesticAccountDto: DomesticAccountDto) {
		return this.httpClient.post<boolean>(
			`${environment.bankServiceApiUrl}${ApiRoutes.account.createDomesticAccount}`,
			domesticAccountDto,
		);
	}

	postCreateForeignAccount(foreignAccountDto: ForeignAccountDto) {
		return this.httpClient.post<boolean>(
			`${environment.bankServiceApiUrl}${ApiRoutes.account.createForeignAccount}`,
			foreignAccountDto,
		);
	}

	postCreateCompanyAccount(businessAccountDto: BusinessAccountDto) {
		return this.httpClient.post<boolean>(
			`${environment.bankServiceApiUrl}${ApiRoutes.account.createBusinessAccount}`,
			businessAccountDto,
		);
	}

	postDepositWithdrawalAddition(depositWithdrawalDto: DepositWithdrawalDto) {
		return this.httpClient.post<boolean>(
			`${environment.bankServiceApiUrl}${ApiRoutes.account.depositWithdrawalAddition}`,
			depositWithdrawalDto,
		);
	}

	postDepositWithdrawalSubtraction(
		depositWithdrawalDto: DepositWithdrawalDto,
	) {
		return this.httpClient.post<boolean>(
			`${environment.bankServiceApiUrl}${ApiRoutes.account.depositWithdrawalSubtraction}`,
			depositWithdrawalDto,
		);
	}

	// HELPER
	hasAccounts() {
		// Get all accounts by email
		const email = localStorage.getItem('email');
		if (email) {
			const accounts = this.getFindByEmail(email).pipe(
				// Check if there are any accounts
				map(accounts => accounts.length > 0),
			);
			return accounts;
		}
		return null;
	}
}
