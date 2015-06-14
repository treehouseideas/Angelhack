var express = require('express');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';


var app = express();
var config = require('./server/config/config')[env];

require('./server/config/express')(app, config);
require('./server/config/routes')(app);
var clusterpoint = require('./server/config/clusterpoint');


app.listen(config.port);
console.log('listening on port ' + config.port + '...');
//// test insert
//clusterpoint.insert(
    [
        {
            id: 1,
            lender : "johnny Bravo",
            borrower : "Kim",
            borrowpic : "http://stwww.surfingmagazine.com/wp-content/uploads/2013/04/march2012_kimdiggs_pic.jpg",
            item: "Surfboard",
            date: 1433665501389,
            notifications : 6,
            description: "Awesome Surfboard",
            notes: "Using it for the beach",
            img: "http://www.thesurfboardproject.com/wp-content/uploads/2012/10/McGrigorSurfboard.jpeg",
            treve: "",
            weeksout: "2"

        },
        {
            id: 2,
            lender : "johnny Bravo",
            borrower : "Kim",
            borrowpic : "http://stwww.surfingmagazine.com/wp-content/uploads/2013/04/march2012_kimdiggs_pic.jpg",
            item: "Digital Projector",
            date: 1433665501389,
            notifications : 6,
            description: "Digital Projector",
            notes: "Working with HDMI",
            img: "http://www.gearsourcecdn.com/gearsource/v5/catalog/stockitem/normal/8cda1fe9-650f-4f5a-8ca4-3e9dba6dfca8.jpg",
            treve: "",
            weeksout: "2"

        },
        {
            id: 3,
            lender : "johnny Bravo",
            borrower : "David",
            borrowpic : "http://celebrityemotion.com/wp-content/gallery/david-josue-jimenez-silva/David-Josu%C3%A9-Jim%C3%A9nez-Silva-Latest-Picture.jpg",
            item: "12ft Ladder",
            date: 1433665501389,
            notifications : 8,
            description: "12ft Ladder",
            notes: "lent to David for project",
            img: "http://ravenmanor.com/history/2003/20030815_08.JPG",
            treve: "",
            weeksout: "3"

        },
        {
            id: 4,
            lender : "johnny Bravo",
            borrower : "David",
            borrowpic : "http://celebrityemotion.com/wp-content/gallery/david-josue-jimenez-silva/David-Josu%C3%A9-Jim%C3%A9nez-Silva-Latest-Picture.jpg",
            item: "Smoker Grill",
            date: 1433665501389,
            notifications : 8,
            description: "Smoker Grill",
            notes: "lent to johnny for camping trip",
            img: "http://i1105.photobucket.com/albums/h357/ThreeDogsBBQ/100_0993.jpg",
            treve: "",
            weeksout: "3"

        },
        {
            id: 5,
            lender : "johnny Bravo",
            borrower : "David",
            borrowpic : "http://celebrityemotion.com/wp-content/gallery/david-josue-jimenez-silva/David-Josu%C3%A9-Jim%C3%A9nez-Silva-Latest-Picture.jpg",
            item: "Electric Drill",
            date: 1433665501389,
            notifications : false,
            description: "Electric Drill with cord",
            notes: "lent to David for project",
            img: "http://cdn.instructables.com/F6D/Q6GY/FHEZCBH1/F6DQ6GYFHEZCBH1.LARGE.jpg",
            treve: "",
            weeksout: "3"

        },
        {
            id: 6,
            lender : "johnny Bravo",
            borrower : "John",
            borrowpic : "http://www.kievrus.com.ua/images/actors_photos/k/18587/large/kevin-zegers-18587-photo-large-12.jpg",
            item: "Sleeping Bag",
            date: 1433665501389,
            notifications : 12,
            description: "Great Sleeping bag",
            notes: "gave to johnny for camping trip",
            img: "http://www.sparqvault.com/wp-content/uploads/2013/08/rei_sub_kilo_+20_sleeping_bag_02.jpg",
            treve: "",
            weeksout: "8"

        },
        {
            id: 7,
            lender : "johnny Bravo",
            borrower : "John",
            borrowpic : "http://www.kievrus.com.ua/images/actors_photos/k/18587/large/kevin-zegers-18587-photo-large-12.jpg",
            item: "PS4 Console",
            date: 1433665501389,
            notifications : 8,
            description: "PS4 Console",
            notes: "Borrowed with Call of Duty game",
            img: "http://4.bp.blogspot.com/-EiHriMUjfMU/Up3civfqHrI/AAAAAAAABVM/JW_knwmuwQY/s1600/img_20131202_172253-resized-1024.jpg",
            treve: "",
            weeksout: "13"

        },
        {
            id: 8,
            lender : "johnny Bravo",
            borrower : "John",
            borrowpic : "http://www.kievrus.com.ua/images/actors_photos/k/18587/large/kevin-zegers-18587-photo-large-12.jpg",
            item: "PS4 Game - Call of Duty",
            date: 1433665501389,
            notifications : 8,
            description: "PS4 Game - Call of Duty",
            notes: "Borrowed with Playstation4",
            img: "http://img.tradera.net/images/516/207831516_7a6488fd-dc71-4f5c-a94c-80a299e286f4.jpg",
            treve: "",
            weeksout: "13"

        }
    ]);
// user profile will have id of username