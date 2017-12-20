<div class="app-mount-dom">
    <app v-cloak></app>
</div>

{%script%}
    require.async('fis3-vue-vuex:widget/app/app.es6.js', function(app) {
        app.init();
    });
{%/script%}
