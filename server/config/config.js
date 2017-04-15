var env = process.env.NODE_ENV || 'development';

if(env === 'development'){
  process.env.PORT = 3000;
  console.log('MONGODB_URI *****',process.env.MONGODB_URI);
} else if (env === 'test') {
    process.env.PORT = 3000;
    console.log('MONGODB_URI *****',process.env.MONGODB_URI);
}
