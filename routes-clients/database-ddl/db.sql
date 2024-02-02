-- public.client definition

-- Drop table

-- DROP TABLE public.client;

CREATE TABLE public.client (
                               id serial4 NOT NULL,
                               nome varchar NOT NULL,
                               email varchar NOT NULL,
                               telefone varchar NOT NULL,
                               x float8 NOT NULL,
                               y float8 NOT NULL,
                               CONSTRAINT "PK_96da49381769303a6515a8785c7" PRIMARY KEY (id)
);