const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const port = 3000;
const app = express();
const bcrypt = require("bcrypt");


const connection = mysql.createConnection({
	host: "server2.bsthun.com",
	port: "6105",
	user: "lab_28juue",
	password: "r72eaNJvHksi9dLP",
	database: "lab_todo02_285ssvi",
});

connection.connect(() => {
	console.log("Database is connected");
});

app.use(bodyParser.json({ type: "application/json" }));

app.get("/", (req, res) => {
	res.send("Hello World!");
});




app.post("/login", (req, res) => {
	const username = req.body.username;
	const password = req.body.password;

	var sql = mysql.format(
		"SELECT * FROM users WHERE username = ? AND password = ?",
		[username, password]
	);
	console.log("DEBUG: /basic/login => " + sql);
	connection.query(sql, (err, rows) => {
		if (err) {
			return res.json({
				success: false,
				data: null,
				error: err.message,
			});
		}

		numRows = rows.length;
		if (numRows == 0) {
			res.json({
				success: false,
				message: "Login credential is incorrect",
			});
		} else {
			res.json({
				success: true,
				message: "Login credential is correct",
				user: rows[0],
			});
		}
    
	});
});

app.post("/register", (req, res) => {
	const username = req.body.username;
	const password = req.body.password;

	if (password.length < 8 ||
		!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(password)) {
		return res.status(400).json({ error: 'Invalid password format' });
	}

	const hashedPassword = bcrypt.hashSync(password, 10);

	connection.query(
		`INSERT INTO users (username, password, hashed_password) VALUES (?, ?, ?)`, [username, password, hashedPassword], (err, rows) => {
			
			if (err) {
				res.json({
					success: false,
					data: null,
					error: err.message,
				});
			} else {
				
				console.log(rows);
				if (rows) {
					res.json({
						success: true,
						data: {
							message: "create success",
						},
					});
				}
			}
		}
	);
});


app.listen(port, () => {
    console.log("Example app listening on port ${port}");
  });


  const bcrypt = require("bcrypt");


const example = async () => {
	const salt1 = await bcrypt.genSalt(10);
	console.log("Salt #1: ", salt1);
	const hash1 = await bcrypt.hash("12345678", salt1);
	console.log("Hash #1: ", hash1);

	const salt2 = await bcrypt.genSalt(10);
	console.log("Salt #2: ", salt2);
	const hash2 = await bcrypt.hash("asdf12123", salt1);
	console.log("Hash #2: ", hash2);

	const valid1 = await bcrypt.compare(
		"12345679",
		"$2b$10$fwkjdMXyeLb7DGaU2UKwTecPJfC7i3ktBP5pFwC3ov71dMSsehus2"
	);
	console.log("Validation #1: ", valid1);

	const valid2 = await bcrypt.compare(
		"12345679",
		"$2b$10$fwkjdMXyeLb7DGaU2UKwTecPJfC7i3ktBP5pFwC3ov71dMSsehus3"
	);
	console.log("Validation #2: ", valid2);

	const valid3 = await bcrypt.compare(
		"asdf12123",
		hash2 
	);
	console.log("Validation #3: ", valid3);
};

example();

  