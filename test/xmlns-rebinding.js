"use strict";

require(".").test({
  name: "xmlns rebinding",
  xml: "<root xmlns:x=\"x1\" xmlns:y=\"y1\" x:a=\"x1\" y:a=\"y1\">" +
    "<rebind xmlns:x=\"x2\">" +
    "<check x:a=\"x2\" y:a=\"y1\"/>" +
    "</rebind>" +
    "<check x:a=\"x1\" y:a=\"y1\"/>" +
    "</root>",
  expect: [
    [
      "opentagstart",
      {
        name: "root",
        attributes: {},
        ns: {},
      },
    ],
    [
      "opentag",
      {
        name: "root",
        uri: "",
        prefix: "",
        local: "root",
        attributes: {
          "xmlns:x": {
            name: "xmlns:x",
            value: "x1",
            uri: "http://www.w3.org/2000/xmlns/",
            prefix: "xmlns",
            local: "x",
          },
          "xmlns:y": {
            name: "xmlns:y",
            value: "y1",
            uri: "http://www.w3.org/2000/xmlns/",
            prefix: "xmlns",
            local: "y",
          },
          "x:a": {
            name: "x:a",
            value: "x1",
            uri: "x1",
            prefix: "x",
            local: "a",
          },
          "y:a": {
            name: "y:a",
            value: "y1",
            uri: "y1",
            prefix: "y",
            local: "a",
          },
        },
        ns: {
          x: "x1",
          y: "y1",
        },
        isSelfClosing: false,
      },
    ],
    [
      "opentagstart",
      {
        name: "rebind",
        attributes: {},
        ns: {},
      },
    ],
    [
      "opentag",
      {
        name: "rebind",
        uri: "",
        prefix: "",
        local: "rebind",
        attributes: {
          "xmlns:x": {
            name: "xmlns:x",
            value: "x2",
            uri: "http://www.w3.org/2000/xmlns/",
            prefix: "xmlns",
            local: "x",
          },
        },
        ns: {
          x: "x2",
        },
        isSelfClosing: false,
      },
    ],
    [
      "opentagstart",
      {
        name: "check",
        attributes: {},
        ns: {},
      },
    ],
    [
      "opentag",
      {
        name: "check",
        uri: "",
        prefix: "",
        local: "check",
        attributes: {
          "x:a": {
            name: "x:a",
            value: "x2",
            uri: "x2",
            prefix: "x",
            local: "a",
          },
          "y:a": {
            name: "y:a",
            value: "y1",
            uri: "y1",
            prefix: "y",
            local: "a",
          },
        },
        ns: {},
        isSelfClosing: true,
      },
    ],
    [
      "closetag",
      "check",
    ],
    [
      "closetag",
      "rebind",
    ],
    [
      "opentagstart",
      {
        name: "check",
        attributes: {},
        ns: {},
      },
    ],
    [
      "opentag",
      {
        name: "check",
        uri: "",
        prefix: "",
        local: "check",
        attributes: {
          "x:a": {
            name: "x:a",
            value: "x1",
            uri: "x1",
            prefix: "x",
            local: "a",
          },
          "y:a": {
            name: "y:a",
            value: "y1",
            uri: "y1",
            prefix: "y",
            local: "a",
          },
        },
        ns: {},
        isSelfClosing: true,
      },
    ],
    [
      "closetag",
      "check",
    ],
    [
      "closetag",
      "root",
    ],
  ],
  opt: {
    xmlns: true,
  },
});
