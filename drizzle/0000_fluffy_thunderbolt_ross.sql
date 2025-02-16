CREATE TABLE "users" (
	"id" uuid DEFAULT gen_random_uuid(),
	"name" text,
	"password" text
);
