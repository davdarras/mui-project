module.exports = {
  extends: ["@commitlint/config-conventional"],
  parserPreset: {
    parserOpts: {
      headerPattern: /^(\w*)(?:\((.*)\))?: \[(#[0-9]{1,4})\](.*)$/,
      headerCorrespondence: ["type", "scope", "ticket", "subject"],
      issuePrefixes: ["#"],
    },
  },
  rules: {
    "scope-empty": [1, "never"],
  },
};
