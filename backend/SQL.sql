PGDMP     '                    {            postgres    15.3    15.3                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    5    postgres    DATABASE     �   CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
    DROP DATABASE postgres;
                postgres    false                       0    0    DATABASE postgres    COMMENT     N   COMMENT ON DATABASE postgres IS 'default administrative connection database';
                   postgres    false    3335                        3079    16384 	   adminpack 	   EXTENSION     A   CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;
    DROP EXTENSION adminpack;
                   false            	           0    0    EXTENSION adminpack    COMMENT     M   COMMENT ON EXTENSION adminpack IS 'administrative functions for PostgreSQL';
                        false    2            �            1259    24645 
   breakefast    TABLE     �   CREATE TABLE public.breakefast (
    id integer NOT NULL,
    foodname character varying(250),
    price numeric(10,2),
    imageurl character varying(3000)
);
    DROP TABLE public.breakefast;
       public         heap    postgres    false            �            1259    24632    users    TABLE     �   CREATE TABLE public.users (
    id integer NOT NULL,
    firstname character varying(50) NOT NULL,
    lastname character varying(50) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    24631    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    216            
           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    215            j           2604    24635    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    216    216                      0    24645 
   breakefast 
   TABLE DATA           C   COPY public.breakefast (id, foodname, price, imageurl) FROM stdin;
    public          postgres    false    217   �                  0    24632    users 
   TABLE DATA           I   COPY public.users (id, firstname, lastname, email, password) FROM stdin;
    public          postgres    false    216   �                  0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 7, true);
          public          postgres    false    215            p           2606    24651    breakefast breakefast_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.breakefast
    ADD CONSTRAINT breakefast_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.breakefast DROP CONSTRAINT breakefast_pkey;
       public            postgres    false    217            l           2606    24641    users users_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
       public            postgres    false    216            n           2606    24639    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    216               �   x��Ͻn� ��?/p|�����u��RD �X@�O_��2���������u�ff�(5�:��)-��u]ɤ���#Q��H:�$]��w�"���
������/S���2_��g��5~���>IuëK�ܘL�G?� �לK�!�`���Pd�����\,	�?����E˄x=s�ږ����{���#G����̀)��}T���'i��AҔ#          i   x�m�K
�0��a��x7Q��5FP�����ar��'�6�-��[5�)�T ��4�����<jV���_	ԋ�O�i$da��C�@3��5	"4�?�     