--
-- PostgreSQL database dump
--

-- Dumped from database version 10.10 (Ubuntu 10.10-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 10.10 (Ubuntu 10.10-0ubuntu0.18.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: general_health_form; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.general_health_form (
    _id integer NOT NULL,
    user_id integer NOT NULL,
    temperature numeric(4,2) NOT NULL,
    sore_throat boolean NOT NULL,
    coughing boolean NOT NULL,
    comments text,
    short_breath boolean NOT NULL,
    date timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


--
-- Name: general_health_form__id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.general_health_form__id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: general_health_form__id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.general_health_form__id_seq OWNED BY public.general_health_form._id;


--
-- Name: quarantine_form; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.quarantine_form (
    _id integer NOT NULL,
    user_id integer NOT NULL,
    date_of_arrival timestamp without time zone NOT NULL,
    passport_no integer NOT NULL,
    transit_port character varying(30) NOT NULL,
    date_of_departure timestamp without time zone NOT NULL,
    address text,
    phone_number character varying(20) NOT NULL,
    date timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


--
-- Name: quarantine_form__id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.quarantine_form__id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: quarantine_form__id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.quarantine_form__id_seq OWNED BY public.quarantine_form._id;


--
-- Name: reminders; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.reminders (
    _id integer NOT NULL,
    title text NOT NULL,
    message text NOT NULL,
    frequency text NOT NULL,
    hour integer NOT NULL
);


--
-- Name: reminders__id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.reminders__id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: reminders__id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.reminders__id_seq OWNED BY public.reminders._id;


--
-- Name: session; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.session (
    sid character varying NOT NULL,
    sess json NOT NULL,
    expire timestamp(6) without time zone NOT NULL
);


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    firstname character varying(30) NOT NULL,
    lastname character varying(30) NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    _id integer NOT NULL,
    phone character varying(15) NOT NULL,
    admin boolean DEFAULT false NOT NULL
);


--
-- Name: users__id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users__id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users__id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users__id_seq OWNED BY public.users._id;


--
-- Name: general_health_form _id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.general_health_form ALTER COLUMN _id SET DEFAULT nextval('public.general_health_form__id_seq'::regclass);


--
-- Name: quarantine_form _id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.quarantine_form ALTER COLUMN _id SET DEFAULT nextval('public.quarantine_form__id_seq'::regclass);


--
-- Name: reminders _id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.reminders ALTER COLUMN _id SET DEFAULT nextval('public.reminders__id_seq'::regclass);


--
-- Name: users _id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN _id SET DEFAULT nextval('public.users__id_seq'::regclass);


--
-- Name: general_health_form general_health_form__id_user_id_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.general_health_form
    ADD CONSTRAINT general_health_form__id_user_id_key UNIQUE (_id, user_id);


--
-- Name: reminders reminders_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.reminders
    ADD CONSTRAINT reminders_pkey PRIMARY KEY (_id);


--
-- Name: session session_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.session
    ADD CONSTRAINT session_pkey PRIMARY KEY (sid);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (_id);


--
-- Name: IDX_session_expire; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "IDX_session_expire" ON public.session USING btree (expire);


--
-- Name: general_health_form general_health_form_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.general_health_form
    ADD CONSTRAINT general_health_form_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(_id);


--
-- Name: quarantine_form quarantine_form_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.quarantine_form
    ADD CONSTRAINT quarantine_form_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(_id);


--
-- PostgreSQL database dump complete
--

