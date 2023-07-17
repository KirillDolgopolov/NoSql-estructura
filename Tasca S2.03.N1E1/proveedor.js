
db.createCollection( 'proveedor', {validator: {$jsonSchema: {bsonType: 'object',title:'proveedor',required: [         'nombre',          'direción',          'teléfono',          'nif'],properties: {nombre: {bsonType: 'string'},direción: {bsonType: 'array',items: {
title:'object',required: [         'Calle',          'número',          'ciudad',          'código postal',          'país'],properties: {Calle: {bsonType: 'string'},número: {bsonType: 'int'},piso: {bsonType: 'int'},puerta: {bsonType: 'int'},ciudad: {bsonType: 'string'},código postal: {bsonType: 'string'},país: {bsonType: 'string'}}}},teléfono: {bsonType: 'int'},fax: {bsonType: 'int'},nif: {bsonType: 'string'}}         }      },
capped:
});  