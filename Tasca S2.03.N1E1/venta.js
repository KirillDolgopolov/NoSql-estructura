
db.createCollection( 'venta', {validator: {$jsonSchema: {bsonType: 'object',title:'venta',required: [         'cliente',          'gafas'],properties: {cliente: {bsonType: 'int'},gafas: {bsonType: 'array',items: {bsonType: 'int'}}}         }      },
capped:
});  