const axios = require("axios").default;

module.exports = class Dischook
{   
    constructor(webhookUrl)
    {
        this.url = webhookUrl;
    }

    getWebhookURL()
    {
        return this.url;
    }

    sendContent(webhookUrl=null, content="Nothing specified lmao.")
    {
        let currentUrl = null;

        if (webhookUrl == null)
        {
            currentUrl = this.url;
        }
        else
        {
            currentUrl = webhookUrl;
        }

        const data = {
            "content": content
        };

        axios.post(currentUrl, data).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        });
    }
}