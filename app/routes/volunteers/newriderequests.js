import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        return this.get('store').query('request', {
            filter:{
                status: "pending"
            }
        });
    },
    actions:{
        acceptRequest(){
            alert("lol");
        }
    }
});
