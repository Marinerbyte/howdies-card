exports.handler = async (event) => {
    const { username, t } = event.queryStringParameters;
    console.log(`Visit: username=${username || 'Unknown'}, timestamp=${t}`);
    return {
        statusCode: 200,
        headers: { 'Content-Type': 'image/gif' },
        body: Buffer.from('R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==', 'base64')
    };
};