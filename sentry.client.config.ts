import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: 'https://929a9911dd7b4c65dba5c4475bef5001@o4507233142898688.ingest.us.sentry.io/4509954221342720',
  integrations: [
    Sentry.feedbackIntegration({
      colorScheme: "system",
      isNameRequired: true,
      isEmailRequired: true,
    }),
  ],
  tracesSampleRate: 1,
  enableLogs: true,
  debug: false,
});
