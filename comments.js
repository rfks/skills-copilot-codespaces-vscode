// Create web server
// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 3000;
var fs = require('fs');
var path = require('path');
var url = require('url');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var flash = require('connect-flash');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });
var mongoose = require('mongoose');
var mongoDB = 'mongodb://