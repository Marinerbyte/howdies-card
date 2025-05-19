exports.handler = async (event) => {
    const { username = "Unknown", t = "undefined" } = event.queryStringParameters || {};
    console.log(`Visit: username=${username}, timestamp=${t}`);
    return {
        statusCode: 200,
        headers: { "Content-Type": "image/png" },
        body: "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==", // 1x1 pixel transparent image
        isBase64Encoded: true
    };
};
