function User () {
    var id;
    var username;
    var username_canonical;
    var facebook_id;
    var first_name;
    var last_name;
    var email;
    var about;
    var adress;
    var currency;
    var picture;
    var roles = 'a:1:{i:0;s:13:"ROLE_FACEBOOK";}';

    this.getJSON = function(){
        return JSON.stringify(this);
    };
    
}

//User.prototype.load = function(){
//	
//};

function User (id) {
    this.id = id;
    this.getJSON = function(){
        return JSON.stringify(this);
    };
}

function Category (id) {
    this.id = id;
    this.getJSON = function(){
        return JSON.stringify(this);
    };
}

function Product () {
    var id;
    var owner;
	var title;
    var price;
    var currency;
    var by;
    var adress;
    var latitude;
    var longitude;
    var description;
    var photo;
    var quality = 0;
    var visiblity = 0;
    var views = 0;
    var category;
    var user;

    this.getJSON = function(){
    	return JSON.stringify(this);
    };
}


function fail(error) {
    console.log(error.code);
}