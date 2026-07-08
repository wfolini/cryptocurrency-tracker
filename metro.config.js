const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

// Agregar soporte para fuentes y archivos adicionales
config.resolver.assetExts.push("db", "mp3", "ttf", "woff", "woff2");

module.exports = config;
