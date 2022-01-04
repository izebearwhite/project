var Emotion = new Vue({
    el:"#emotion",
    data:{
        like:0,
        love:0,
        laugh:0,
        wow:0,
        sad:0,
        angry:0,
        sumary:0,
    },
    methods:{
        Like:function(n){
            this.like +=n;
            this.sumary += this.like;
        },
        Love:function(n){
            this.love +=n;
            this.sumary += this.love;
        },
        Laugh:function(n){
            this.laugh +=n;
            this.sumary += this.laugh;
        },
        Wow:function(n){
            this.wow +=n;
            this.sumary += this.wow;
        },
        Sad:function(n){
            this.sad +=n;
            this.sumary += this.sad;
        },
        Angry:function(n){
            this.angry +=n;
            this.sumary += this.angry;
        },
    }
})

var Pop = new Vue({
    el:"#popcat",
    data:{
        time:0
    },
    methods:{
        press:function(){
            this.time++;
        }
    }
})