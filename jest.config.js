module.exports = {
	testEnvironment: 'jest-environment-jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
	transformIgnorePatterns: ['node_modules/(?!(firebase|@firebase)/)'],
	globals: {
		FIREBASE_API_KEY: 'AIzaSyB8anMNQPi2GuLJvv8eDOtOjozc99cyvHo',
		FIREBASE_AUTH_DOMAIN: 'key',
		FIREBASE_DATABASE_URL: 'key',
		FIREBASE_PROJECT_ID: 'key',
		FIREBASE_STORAGE_BUCKET: 'key',
		FIREBASE_MESSAGING_SENDER_ID: 'key',
		FIREBASE_APP_ID: 'key',
		FIREBASE_MEASUREMENT_ID: 'key'
	}
}
