
db.createCollection( 'productos', {validator: {$jsonSchema: {bsonType: 'object',title:'productos',required: [         'nombre',          'preu',          'pedido',          'tipo de producto'],properties: {nombre: {bsonType: 'string'},describción: {bsonType: 'string'},imagen: {bsonType: 'binData'},preu: {bsonType: 'decimal'},pedido: {bsonType: 'objectId'},tipo de producto: {enum: }}         }      },
capped:
});  