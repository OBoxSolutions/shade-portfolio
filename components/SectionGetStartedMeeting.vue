<template>
    <div class="section-meeting">
        <div class="__title">
            SELECT THE DATE OF THE MEETING:
        </div>
        <div class="__date-container">
                <calendar class="__calendar"  title-position="left" @dayclick="dateSelected"  />
                <div class="__hour-list">
                    <div class="__time-container">
                        <div class="__day">
                            {{weekdays[selected.weekday-1]}}
                        </div>
                        <div class="__time">
                            [ {{selectedHour}} ]
                        </div>
                    </div>
                    <div class="__hours">
                        <div
                            v-for="(hour, index) in hours"
                            :key="`hour-${index}`" 
                            class="__hour"
                            @click="hourSelected(hour)">
                                {{hour}}
                                <div v-if="hour == selectedHour" class="__selected" ></div>
                        </div>
                    </div>  
                </div>
        </div>
    </div>

</template>
<script>
    export default {
        name:"SectionGetStartedMeeting",
        data(){
            return{
                hours:['08:00','08:30','09:00','09:30','10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00',
                '14:30','15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30','19:00','19:30','20:00'],
                selected: {weekday:1},
                selectedHour:"select_time",
                weekdays: ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
            }
        },
        methods: {
            dateSelected(date) {
                this.selected = date;
            },
            hourSelected(hour){
                this.selectedHour = hour;
            }
        },
    }
</script>

<style scoped lang="scss">
    .section-meeting{
        background-image: url("/get-started/in-the-stars.gif");
        background-size:cover;
        background-repeat: repeat-y;
        padding: 1rem;
    
        .__title{
            margin: 1rem;
            text-align: center;
            color:white;
            font-size: 1.5rem;
        }

        .__date-container{
            padding: 2rem;
            background-color: #5A55F8;
            display: flex;
            flex-direction: column;
            gap:5rem;
            margin: 2rem 0;
            .__calendar{
                width: 100% !important;
                border:1px solid black;
                border-radius: 0;
                font-family: "Press Start 2P", "Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif !important;
            }

            .__hour-list{
                background-color: #071C50;
                padding: 1rem;
                display: flex;
                flex-direction: column;

                .__time-container{
                    background-color: #352FCF;
                    display: flex;
                    gap:1rem;
                    align-items: center;
                    justify-content: space-between;
                    color:white;
                    padding: 1rem;

                    .__time{
                        font-size: 0.6rem;
                    }

                }
                .__hours{
                    display: flex;
                    flex-direction: column;
                    flex-wrap: wrap;
                    height: 100%;
                    height: 20rem;
                    margin-top: 0.5rem;
                    .__hour{
                        border-bottom: 1px solid white;
                        padding: 0.3rem;
                        margin-right: 0.5rem;
                        color: white;
                        font-size: 0.6rem;
                        cursor:pointer;
                        display: flex;
                        justify-content: space-between;
                        .__selected{
                            height: 100%;
                            width: 1rem;
                            background-image: url('/get-started/selected.png');
                            background-size: cover;
                        }
                    }
                }
            }
        }
    }
    /* Breakpoints begin here  */
    @media(min-width: 768px) {
        .section-meeting{
            .__title{
                width: 25rem;
                margin: 0;
            }
            .__date-container{
                flex-direction: row;
                    .__calendar{
                        width: 50% !important;
                    }

                    .__hour-list{
                        width: 50%;
                    }
                }
        }
    }

</style>