module.exports = ({ env }) => ({
    // ...
    upload: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('AKIA35KCLFHBP3JCOI5F'),
        secretAccessKey: env('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'),
        region: env('us-west-1'),
        params: {
          Bucket: env('image-b354'),
        },
      },
    },
    // ...
  });