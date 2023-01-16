module.exports = {
  extends: ["@commitlint/config-conventional"],
  parserPreset: {
    parserOpts: {
      headerPattern: /^[A-Z]{1,4}-[0-9]{1,4}:\s(\w*)(?:\((.*)\))?: (.*)$/,
      headerCorrespondence: ["type", "scope", "subject"],
      issuePrefixes: ["^[A-Z]{1,4}-[0-9]{1,4}"],
      referenceActions: ["xxx-"], // (!!)
    },
  },
  rules: {
    "references-empty": [2, "never"],
    "scope-empty": [1, "never"],
  },
};
