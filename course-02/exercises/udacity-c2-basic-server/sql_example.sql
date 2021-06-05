-- If this thing exists, let's destroy it ( way to re-do certain things)
DROP VIEW IF EXISTS joined;
DROP VIEW IF EXISTS toyotas;
DROP TABLE IF EXISTS "public"."make";
DROP TABLE IF EXISTS "public"."cars";

-- Creating a table (i.e. same as the plus button in Postbird and entered in table name)
CREATE TABLE "public"."cars" (
  id SERIAL PRIMARY KEY, -- we are saying we will auto-increment and use this as our primary key id
  type TEXT,
  model TEXT,
  cost INT,
  make_id INT
);

-- once table created, we can insert data into it
INSERT INTO "public"."cars" ("type", "model", "cost", "make_id") VALUES 
	('sedan', 'roadster', '33', '2'),
	('sedan', 'prius', '22', '1'),
	('sedan', 'focus', '18', '3'),
	('suv', 'highlander', '40', '1');
  
CREATE TABLE "public"."make" (
  id SERIAL PRIMARY KEY,
  name TEXT
);

INSERT INTO "public"."make" ("name") VALUES ('toyota'), ('tesla'), ('ford');

CREATE VIEW joined AS
SELECT cars.type, cars.cost, cars.model, make.name
  FROM cars
  INNER JOIN make ON (cars.make_id = make.id)
  ORDER BY cost DESC  LIMIT 30;
  
CREATE VIEW toyotas AS
SELECT cars.type, cars.cost, cars.model, make.name
  FROM cars
  INNER JOIN make ON (cars.make_id = make.id)
  WHERE make.name = 'toyota'
  ORDER BY cost DESC  LIMIT 30;