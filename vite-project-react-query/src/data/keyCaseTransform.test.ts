import { camelCase } from "./keyCaseTransform"
import _ from "lodash"
import { describe, it, expect } from "vitest"

describe("camelCase", () => {
  it("should convert snake case properties to camel case", () => {
    // Test input JSON object in snake case
    const input = {
      first_name: "John",
      last_name: "Doe",
      age: 30,
      is_active: true,
      address_details: {
        street_name: "123 Main St",
        city_name: "New York"
      }
    }

    // Expected output JSON object in camel case
    const expectedOutput = {
      firstName: "John",
      lastName: "Doe",
      age: 30,
      isActive: true,
      addressDetails: {
        streetName: "123 Main St",
        cityName: "New York"
      }
    }

    // Call the function and compare the actual output with the expected output
    const actualOutput = camelCase(input)
    expect(actualOutput).toEqual(expectedOutput)
  })

  it("should handle empty input", () => {
    // Test input JSON object with no properties
    const input = {}

    // Expected output should also be an empty object
    const expectedOutput = {}

    // Call the function and compare the actual output with the expected output
    const actualOutput = camelCase(input)
    expect(actualOutput).toEqual(expectedOutput)
  })

  it("should handle nested objects and arrays", () => {
    // Test input JSON object with nested objects and arrays in snake case
    const input = {
      user_details: {
        first_name: "John",
        last_name: "Doe",
        addresses: [
          {
            street_name: "123 Main St",
            city_name: "New York"
          },
          {
            street_name: "456 Elm St",
            city_name: "Los Angeles"
          }
        ]
      }
    }

    // Expected output JSON object with nested objects and arrays in camel case
    const expectedOutput = {
      userDetails: {
        firstName: "John",
        lastName: "Doe",
        addresses: [
          {
            streetName: "123 Main St",
            cityName: "New York"
          },
          {
            streetName: "456 Elm St",
            cityName: "Los Angeles"
          }
        ]
      }
    }

    // Call the function and compare the actual output with the expected output
    const actualOutput = camelCase(input)
    expect(actualOutput).toEqual(expectedOutput)
  })
})
