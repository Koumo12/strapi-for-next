module.exports = ({ env })=>({
  upload: {
    config: {
      breakpoints: {
        xlarge: 1920,
        large: 1000,
        medium: 750,
        small: 500,
        xsmall: 64
      },
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
        localServer: {
          maxage: 300000,
        },
        sizeLimit: 250 * 1024 * 1024,
        
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
     
    },
  },
  });