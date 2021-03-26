# codebuild-hello

#### Create webhook token
```bash
aws codebuild import-source-credentials --server-type GITHUB --auth-type PERSONAL_ACCESS_TOKEN --token <GITHUB_PAT>
```