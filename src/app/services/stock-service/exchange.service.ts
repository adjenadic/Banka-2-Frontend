import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ApiRoutes } from '../api-routes';
import { HttpClient } from '@angular/common/http';
import { ExchangeDto } from '../../dtos/exchange-dto';

@Injectable({
	providedIn: 'root',
})
export class ExchangeService {
	constructor(private httpClient: HttpClient) {}

	// GET
	getFindAll() {
		return this.httpClient.get<ExchangeDto[]>(
			environment.stockServiceApiUrl + ApiRoutes.exchange.findAll,
		);
	}

	getFindById(id: number) {
		return this.httpClient.get<ExchangeDto>(
			environment.stockServiceApiUrl +
				ApiRoutes.exchange.findById +
				'/' +
				id,
		);
	}

	getFindByName(name: string) {
		return this.httpClient.get<ExchangeDto>(
			environment.stockServiceApiUrl +
				ApiRoutes.exchange.findByName +
				'?exchange=' +
				'/' +
				name,
		);
	}

	getFindBySymbol(symbol: string) {
		return this.httpClient.get<ExchangeDto>(
			environment.stockServiceApiUrl +
				ApiRoutes.exchange.findBySymbol +
				'/' +
				symbol,
		);
	}

	getFindByMICode(miCode: string) {
		return this.httpClient.get<ExchangeDto>(
			environment.stockServiceApiUrl +
				ApiRoutes.exchange.findByMICode +
				'/' +
				miCode,
		);
	}
}
