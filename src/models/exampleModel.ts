import mongoose, { Schema, Document, Types } from 'mongoose';

// Define the schema
const ExampleSchema = new Schema(
  {
    /**
     * A required string field with validation on length.
     * Default value: "Default String".
     */
    stringField: {
      type: String,
      required: [true, 'String field is required'],
      minlength: [5, 'String field must be at least 5 characters long'],
      maxlength: [50, 'String field must be less than 50 characters long'],
      default: 'Default String',
    },

    /**
     * A required number field with min and max constraints.
     * Default value: 42.
     */
    numberField: {
      type: Number,
      required: [true, 'Number field is required'],
      min: [0, 'Number field must be at least 0'],
      max: [100, 'Number field must be less than or equal to 100'],
      default: 42,
    },

    /**
     * Date field, defaulting to the current timestamp.
     */
    dateField: {
      type: Date,
      default: Date.now,
    },

    /**
     * Buffer field for storing binary data.
     */
    bufferField: Buffer,

    /**
     * Boolean field with a default value of false.
     */
    booleanField: {
      type: Boolean,
      default: false,
    },

    /**
     * A field that can store any data type.
     * Default value: an empty object.
     */
    mixedField: {
      type: Schema.Types.Mixed,
      default: {},
    },

    /**
     * ObjectId reference to another model.
     */
    objectIdField: {
      type: Schema.Types.ObjectId,
      ref: 'ExampleModel',
    },

    /**
     * Array of strings with a default value.
     */
    arrayField: {
      type: [String],
      default: ['defaultItem1', 'defaultItem2'],
    },

    /**
     * Decimal128 field for storing precise decimal values.
     */
    decimal128Field: {
      type: Schema.Types.Decimal128,
      default: 0.0,
    },

    /**
     * A Map field that stores key-value pairs.
     */
    mapField: {
      type: Map,
      of: String,
      default: new Map([
        ['key1', 'value1'],
        ['key2', 'value2'],
      ]),
    },

    /**
     * A nested object containing specific subfields.
     */
    nestedObject: {
      nestedString: {
        type: String,
        default: 'Nested Default String',
      },
      nestedNumber: {
        type: Number,
        default: 10,
      },
    },

    /**
     * A 2D array of numbers.
     */
    listOfLists: {
      type: [[Number]],
      default: [
        [1, 2, 3],
        [4, 5, 6],
      ],
    },

    /**
     * An array of objects with predefined subfields.
     */
    listOfObjects: {
      type: [
        {
          subField1: {
            type: String,
            default: 'SubField Default',
          },
          subField2: {
            type: Number,
            default: 100,
          },
        },
      ],
      default: [
        { subField1: 'Default1', subField2: 100 },
        { subField1: 'Default2', subField2: 200 },
      ],
    },

    /**
     * Email field with validation, uniqueness, and automatic trimming/lowercasing.
     */
    emailField: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/\S+@\S+\.\S+/, 'Invalid email address'],
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields automatically
    versionKey: false, // Disables the __v field (used for versioning)
  }
);

/**
 * Adds a unique index on the email field to enforce uniqueness at the database level.
 */
ExampleSchema.index({ emailField: 1 }, { unique: true });

/**
 * Middleware: Runs before saving a document.
 * This is useful for performing operations like password hashing or logging.
 */
ExampleSchema.pre('save', function (next) {
  console.log(`📝 Saving document: ${this.emailField}`);
  next();
});

// Create and export the model
const ExampleModel = mongoose.model('ExampleModel', ExampleSchema);
export default ExampleModel;
