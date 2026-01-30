// config/corsOptions.js
const allowedOrigins = [
  "http://localhost:3000",  // local frontend
  "https://yourfrontend.com", // production frontend
  "https://staging.yourfrontend.com" // staging
];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

export default corsOptions;
