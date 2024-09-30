<template>
    <div class="main">
        <div class="header">
            <h2>Header</h2>
        </div>
        <div class="feature_yellow">
            <h3>Feature Yellow</h3>            
        </div><!-- feature_yello -->
        <div class="feature_purple">
            <h3>Feature Purple</h3>
        </div><!-- feature_purple -->
        <div class="feature_green">
            <h3>Feature green</h3>
        </div><!-- feature_green -->
        <div class="signup">
            <h3>Signup</h3>
        </div><!-- signup -->
        <div class="footer">
            <h3>footer</h3>
        </div><!-- footer -->
    </div><!-- main -->
    
</template>

<script lang="ts" setup>

</script>

<style scoped>

    .main {
        display: grid;
        grid-template-columns: repeat(3,1fr);
        grid-template-rows: 200px 250px 150px auto;
        grid-template-areas: 
        "header header header"
        "fYellow  fPurple   fGreen"
        "signup   signup   signup"
        "footer  footer   footer"
        ;
    }

    .main .header {
        background-color: rgb(103, 153, 52);
        grid-area: header;
    }

    .main .feature_yellow {
        background-color: #F2F7A1 ;
        grid-area: fYellow;
    }

    .main .feature_purple {
       background-color: #453C67; 
       grid-area: fPurple;
    }

    .main .feature_green {
        background-color: #46C2CB; 
        grid-area: fGreen;
    }

    .main .signup {
        background-color: #FFD7C4; 
        grid-area: signup;
    }

    .main .footer {
        background-color: #87A2FF; 
        grid-area: footer;
    }
    

    .main h2 {
        font-size: 3rem;
        text-align: center;
        padding-top: 1rem;
        line-height: 2.3rem;
    }

    .main h3 {
        font-size: 2rem;
        font-weight: 500;
        text-align: center;
        padding-top: 1rem;
    }

    .header, .feature_yellow, .feature_purple, .feature_green, .signup, .footer {
        display: flex;
        justify-content: center;
        align-items: center;
    }


@media screen and (max-width: 698px) {
    .main{
        grid-template-columns: 1fr;
        grid-template-rows: auto-fill;
        grid-template-areas: 
        "header"
        "fYellow"
        "fPurple"
        "fGreen"
        "signup"
        "footer"
        ;
    }
}
</style>