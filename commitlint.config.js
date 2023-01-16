module.exports = {
  extends: ["@commitlint/config-conventional"],
  parserPreset: {
    parserOpts: {
      headerPattern: /^(\w*)(?:\((.*)\))?: (\[#[0-9]{1,4}\].*)$/,
      headerCorrespondence: ["type", "scope", "subject"],
      issuePrefixes: ["#"],
    },
  },
  rules: {
    "references-empty": [1, "never"],
    "scope-empty": [1, "never"],
  },
};
