
db.createCollection( 'etiquetas', {validator: {$jsonSchema: {bsonType: 'object',title:'etiquetas',required: [         'nombre de etiqueta',          'publicación de video'],properties: {nombre de etiqueta: {bsonType: 'string'},publicación de video: {bsonType: 'objectId'}}         }      },
capped:
});  