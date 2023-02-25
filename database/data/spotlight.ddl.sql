CREATE SEQUENCE IF NOT EXISTS  nodes_id_seq START 100;
CREATE SEQUENCE IF NOT EXISTS connectors_id_seq START 100;
CREATE SEQUENCE IF NOT EXISTS diagram_id_seq START 100;
 
-- Table: public.nodes
CREATE TABLE IF NOT EXISTS nodes
(
    id integer NOT NULL DEFAULT nextval('nodes_id_seq'::regclass),
    nodebody json,
    "offsetX" bigint,
    "offsetY" bigint,
    CONSTRAINT nodes_pkey PRIMARY KEY (id)
);


ALTER TABLE nodes
    OWNER to postgres;

COMMENT ON TABLE nodes
    IS 'storage for flow chart nodes';

 -- Table: public.connectors

CREATE TABLE IF NOT EXISTS connectors
(
    id integer NOT NULL DEFAULT nextval('connectors_id_seq'::regclass),
    connectorbody json,
    sourcenode bigint,
    targetnode bigint,
    CONSTRAINT connectors_pkey PRIMARY KEY (id)
);

ALTER TABLE connectors
    OWNER to postgres;

COMMENT ON TABLE connectors
    IS 'storage for connectors in the flow chart';   

    -- Table: public.diagrams
CREATE TABLE IF NOT EXISTS diagrams
(
    id integer NOT NULL DEFAULT nextval('diagram_id_seq'::regclass),
    dname varchar(256) ,
    dbody json,
    CONSTRAINT diagrams_pkey PRIMARY KEY (id)
);


ALTER TABLE diagrams
    OWNER to postgres;

COMMENT ON TABLE diagrams
    IS 'storage for flow chart diagrams';
 