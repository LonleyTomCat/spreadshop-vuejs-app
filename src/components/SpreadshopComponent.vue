<template>
    <div id="myShop">
        <a href="https://fussel-streetwear.myspreadshop.de">fussel-streetwear</a>
    </div>
</template>

<script>
export default {
    name: 'SpreadshopComponent',
    mounted() {
        // Initialize Spreadshop configuration
        window.spread_shop_config = {
            shopName: 'fussel-streetwear',
            locale: 'de_DE',
            prefix: 'https://fussel-streetwear.myspreadshop.de',
            baseId: 'myShop'
        };

        // Load Spreadshop JavaScript client
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://fussel-streetwear.myspreadshop.de/shopfiles/shopclient/shopclient.nocache.js';
        script.async = true;
        document.head.appendChild(script);
    }
}
</script>

<style scoped>
/* Add scoped styles if needed */
</style>
