import crypto from 'crypto-js';

class ShopeeService {

    async shopeeApi() {
        const appID = "13339830005";
        const secret = "RMBWCGIT56RXTMPHCXYAPRO4T6OIH6UY";
        //Set the API endpoint URL
        const url = "https://open-api.affiliate.shopee.ph/graphql";
        const originUrl = "https://shopee.ph/Apple-Iphone-11-128GB-Local-Set-i.52377417.6309028319";
        var payload2 ={"query":"mutation{generateShortLink(input:{originUrl:"+originUrl+"})}"};

       // var payload2 = payload.replace(/\\n/g, '');
        let timestamp = Math.floor(Date.now() / 1000);
        let factor = appID + timestamp + payload2 + secret;
        let signature = crypto.SHA256(factor).toString();

        let headers = {
            'Content-type': 'application/json',
            'Authorization': `SHA256 Credential=${appID},Timestamp=${timestamp},Signature=${signature}`
        };

        let response = await fetch(url, {
            method: 'POST',
            body: payload2,
            headers: headers
        });

        let data = response.json();
        return data['data']['productOfferV2']['nodes'];

    }
}

export default new ShopeeService();
