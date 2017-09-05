<template>
    <div class="hubMain">
        <div class="col-left">
            <img v-bind:src="weatherImage" alt="weather thumbnail">
            <p class="col-left_city">{{place.request[0].query}} <br /> {{place.weather[0].date}}</p>
            <span class="col-right_value">{{place.current_condition[0].weatherDesc[0].value}}</span>
        </div>

        <div class="col-right">
            <p><strong>Current Temperature  </strong><span class="col-right_value"> {{place.current_condition[0].temp_C}} C | {{place.current_condition[0].temp_F}} F</span></p>
            <p><strong>Feels like  </strong><span class="col-right_value">{{place.current_condition[0].FeelsLikeC}} C | {{place.current_condition[0].FeelsLikeF}} F</span></p>
            <p><strong>Humidity  </strong><span class="col-right_value">{{place.current_condition[0].humidity}} %</span></p>
            <p><strong>14 Day Weather Forecast :</strong></p>
            <div class="d-flex flex-wrap">
                <span class="day_forecast" v-for="day in days"><div class="day_forecast_date">{{day.date}}</div> Max {{day.maxtempC | day.maxtempF}} Min {{day.mintempC | day.mintempF}}</span>
            </div>
        </div>

    </div>
</template>

<script>
    import Axios from 'axios'

    export default{
        data:function(){
            return{
                place : '',
                weatherImage : '',
                days : ''
            }
        },
        created:function(){
            let vm = this;
            Axios.get('http://api.worldweatheronline.com/premium/v1/weather.ashx?key=087c6e752d3240fc91f203936170409&q=Vancouver&format=json')
                .then(function(response){
                    vm.place = response.data.data;
                    vm.weatherImage = vm.place.current_condition[0].weatherIconUrl[0].value;
                    vm.days = vm.place.weather;
                })
        }
    }
</script>

<style>
    .hubMain{
        margin-top: 3%;
        margin-bottom: 2%;
    }

    .col-left{
        float: left;
        width: 30%;
        text-align: center;
    }

    .col-left .col-left_city{
        margin-top: 2%;
        font-size: 23px;
    }

    .col-right{
        float: left;
        width: 70%;
    }

    .col-right_value{
        color:  #00ff99;
        font-size: 23px;
    }

    span.day_forecast{
        padding: 1%;
    }

    span.day_forecast .day_forecast_date{
        font-size: 17px;
        text-align: center;
        border-bottom: 2px solid  #ffcccc;
    }

</style>