var fs = require('fs');
var http = require('http');

var server = http.createServer();

fs.readFile('./index.html', 'utf-8', function(err, data) {

	server.on('request', function (request, response) {
    	response.setHeader("Content-Type", "text/html; charset=utf-8");
    	if (request.method === 'GET' && request.url === '/') {
        	response.write(data);
            	response.end();
    	} else {
            	response.statusCode = 404;
            	response.write('<h1>404: Zła ścieżka!</h1>');
            	response.end();
    	}
	});
});

server.listen(8080);

// // fs.stat('./cat.jpg', function(err, stats) {
// // 	var statMode = new StatMode(stats);
// //     console.log(statMode.toString());
// // });

// 	fs.writeFile('./tekst.txt', files, function(err) {
//         if (err) throw err;
//         // console.log('Zapisano!'.blue);
//         // fs.readdir('./node_modules', 'utf-8', function(err, files) {
//         //     // console.log('Dane po zapisie'.blue)
//         //     console.log(files);
//         // });
//     });
//   });






//    });

// fs.writeFile('./tekst.txt', 'Tekst, który zapiszemy w pliku tekst.txt', function(err) {
//     if (err) throw err; // jeśli pojawi się błąd, wyrzuć wyjątek
//     console.log('Zapisano!');
// });



// fs.writeFile('./tekst.txt', 'A tak wyglądają po zapisie!', function(err) {
//         if (err) throw err;
//         console.log('Zapisano!'.blue);
//         fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
//             console.log('Dane po zapisie'.blue)
//             console.log(data);
//         });
//     });
// });



// fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
//     console.log(data);
// });

// fs.writeFile('./tekst.txt', 'Tekst, który zapiszemy w pliku tekst.txt', function(err) {
//     if (err) throw err; // jeśli pojawi się błąd, wyrzuć wyjątek
//     console.log('Zapisano!');
// });