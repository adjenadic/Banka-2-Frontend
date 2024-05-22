import { defineConfig } from 'cypress';

export default defineConfig({
	e2e: {
		baseUrl: 'http://localhost:80',
		screenshotOnRunFailure: true,
		screenshotsFolder: 'cypress/screenshots',
		video: true,
		videosFolder: 'cypress/videos',
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
	},
});
