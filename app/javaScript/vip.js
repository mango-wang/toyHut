//获取州
var vip = {
    state: {},
    init: function () {
        var $this = this;
        //init Data
        $this.getState($this);
        $('#joinIn').click(function () {

            $this.submit($this);
        })
    },
    selectState: function (data) {
        data.data[1].state = data.data[0];
        data.data[1].changeState();

    },
    changeState:function(){
        $('#currentState').html(this.state.acronym);
    },
    getState: function ($this) {

        $.post('http://127.0.0.1:8888', { cmd:'getStates',module:'01-0001-0002'}, function (result) {
            if (result) {
                for (var i = 0; i < result.length; i++) {
                    var li = $('<li/>').html('<a>' + result[i].acronym + '</a>');
                    $('#ulState').append(li);
                    li.click([result[i], $this], $this.selectState);
                }
            }
        }, 'json');
    },
    submit: function ($this) {
        var joinIn = {
            email: $('#email').val(),
            firstName: $('#name').val(),
            state: $this.state.id,
            type:1,
            cmd:'set',
            module:'01-0001-0002'
        }
        $.post('http://127.0.0.1:8888', joinIn, function (data) {
            if (data) {

            }
        }, 'json');
    }
}
$(function(){
    vip.init();
})



