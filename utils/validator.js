import Joi from "joi";

export const validateWarehouse = (warehouse) => {
  const schema = Joi.object({
    warehouse_name: Joi.string().required(),
    address: Joi.string().required(),
    city: Joi.string().required(),
    country: Joi.string().required(),
    contact_name: Joi.string().required(),
    contact_position: Joi.string().required(),
    contact_phone: Joi.string().pattern(/^\+\d{1,3}\s?\(\d{3}\)\s?\d{3}-?\d{4}$/).required(),
    contact_email: Joi.string().email().required()
  });

  return schema.validate(warehouse);
};