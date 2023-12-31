PGDMP     4    	                {            digitalAppIndividual    14.7    14.7                 0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    81975    digitalAppIndividual    DATABASE     a   CREATE DATABASE "digitalAppIndividual" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'C';
 &   DROP DATABASE "digitalAppIndividual";
                postgres    false                        3079    81983 	   adminpack 	   EXTENSION     A   CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;
    DROP EXTENSION adminpack;
                   false                       0    0    EXTENSION adminpack    COMMENT     M   COMMENT ON EXTENSION adminpack IS 'administrative functions for PostgreSQL';
                        false    2            �            1259    81999    registration    TABLE     �   CREATE TABLE public.registration (
    ordernumber integer NOT NULL,
    fiestname "char",
    lastname "char",
    email "char"
);
     DROP TABLE public.registration;
       public         heap    postgres    false            �            1259    82020    users    TABLE     x   CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(30),
    email character varying(30)
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    82019    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    212                       0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    211            k           2604    82023    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    211    212    212            �          0    81999    registration 
   TABLE DATA           O   COPY public.registration (ordernumber, fiestname, lastname, email) FROM stdin;
    public          postgres    false    210   >       �          0    82020    users 
   TABLE DATA           0   COPY public.users (id, name, email) FROM stdin;
    public          postgres    false    212   h                  0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 2, true);
          public          postgres    false    211            m           2606    82003    registration registration_pkey 
   CONSTRAINT     e   ALTER TABLE ONLY public.registration
    ADD CONSTRAINT registration_pkey PRIMARY KEY (ordernumber);
 H   ALTER TABLE ONLY public.registration DROP CONSTRAINT registration_pkey;
       public            postgres    false    210            o           2606    82025    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    212            �      x�3���,�,�2��%\1z\\\ /�      �   4   x�3�tO�/JO�LS���9�z���\����9���y��l� ��     