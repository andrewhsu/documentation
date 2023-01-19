/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docsSidebar: [
    {
      type: "doc",
      label: "Docs Home",
      id: "home/index",
    },
    {
      type: "category",
      label: "Get Started",
      link: { type: "doc", id: "get-started/index" },
      items: [
        {
          type: "doc",
          label: "Introduction to Redpanda",
          id: "get-started/intro-to-events",
        },
        {
          type: "doc",
          label: "How Redpanda Works",
          id: "get-started/architecture",
        },
        {
          type: "doc",
          label: "Redpanda Licensing",
          id: "get-started/licenses",
        },
        {
          type: "category",
          label: "Redpanda Quickstart",
          link: { type: "doc", id: "get-started/quick-start/index" },
          items: [
            {
              type: "doc",
              label: "Docker",
              id: "get-started/quick-start/quick-start-docker",
            },
            {
              type: "doc",
              label: "Linux",
              id: "get-started/quick-start/quick-start-linux",
            },
            {
              type: "doc",
              label: "macOS",
              id: "get-started/quick-start/quick-start-macos",
            },
            {
              type: "doc",
              label: "Kubernetes",
              id: "get-started/quick-start/kubernetes-qs-dev",
            },
            {
              type: "doc",
              label: "Introduction to Redpanda Console",
              id: "get-started/quick-start/quick-start-console",
            },
          ]
        },
        {
          type: "doc",
          label: "Introduction to rpk",
          id: "get-started/rpk-install",
        },
        {
          type: "doc",
          label: "Build a Sample Application",
          id: "get-started/code-examples",
        },
      ],
    },
    {
      type: "category",
      label: "Develop",
      link: { type: "doc", id: "develop/index" },
      
      
      items: [
        {
          type: "doc",
          label: "Supported Kafka Clients",
          id: "develop/kafka-clients",
        },
        "develop/code-examples",
        "develop/guide-nodejs",
        "develop/http-proxy",
        {
          type: "category",
          label: "Produce Data",
          link: { type: "doc", id: "develop/produce-data/index" },
          items: [
            "develop/produce-data/configure-producers",
            {
              type: "doc",
              label: "Idempotent Producers",
              id: "develop/produce-data/idempotent-producers",
            },
          ]
        },
        {
          type: "category",
          label: "Consume Data",
          link: { type: "doc", id: "develop/consume-data/index" },
          items: [
            {
              type: "doc",
              label: "Consumer Offsets",
              id: "develop/consume-data/consumer-offsets",
            },
          ]
        },
        "develop/transactions",
      ],
    },
    {
      type: "category",
      label: "Deploy",
      link: { type: "doc", id: "deploy/index" },
      items: [
        {
          type: "category",
          label: " Choose a Deployment Option",
          link: { type: "doc", id: "deploy/deployment-option/index" },
          items: [
            {
              type: "category",
              label: "Self-Hosted",
              link: { type: "doc", id: "deploy/deployment-option/self-hosted/index" },
              items: [
                {
                  type: "category",
                  label: "Kubernetes",
                  link: { type: "doc", id: "deploy/deployment-option/self-hosted/kubernetes/index" },
                  items: [
                    {
                      type: "doc",
                      label: "Kubernetes Cluster Requirements",
                      id: "deploy/deployment-option/self-hosted/kubernetes/kubernetes-cluster-requirements",
                    },
                    {
                      type: "doc",
                      label: "Kubernetes Production Deployment",
                      id: "deploy/deployment-option/self-hosted/kubernetes/kubernetes-production-deployment",
                    },
                    {
                      type: "doc",
                      label: "Best Practices",
                      id: "deploy/deployment-option/self-hosted/kubernetes/kubernetes-best-practices",
                    },
                    {
                      type: "doc",
                      label: "Tune Worker Nodes",
                      id: "deploy/deployment-option/self-hosted/kubernetes/kubernetes-tune-workers",
                    },
                    {
                      type: "doc",
                      label: "Deploy Redpanda",
                      id: "deploy/deployment-option/self-hosted/kubernetes/kubernetes-deploy",
                    },
                  ]
                },
                {
                  type: "category",
                  label: "Manual",
                  link: { type: "doc", id: "deploy/deployment-option/self-hosted/manual/index" },
                  items: [
                    {
                    type: "category",
                  label: "Production Deployment",
                  link: { type: "doc", id: "deploy/deployment-option/self-hosted/manual/production/index" },
                  items: [
                    {
                      type: "doc",
                      label: "Deploy for Production",
                      id: "deploy/deployment-option/self-hosted/manual/production/production-deployment",
                    },
                    {
                      type: "doc",
                      label: "Automate Deployment for Production",
                      id: "deploy/deployment-option/self-hosted/manual/production/production-deployment-automation",
                    },
                  ]
                },
                    "deploy/deployment-option/self-hosted/manual/node-property-configuration",
                    {
                      type: "doc",
                      label: "High Availability",
                      id: "deploy/deployment-option/self-hosted/manual/high-availability",
                    },
                    {
                      type: "doc",
                      label: "Sizing Use Cases",
                      id: "deploy/deployment-option/self-hosted/manual/sizing-use-cases",
                    },
                    {
                      type: "doc",
                      label: "Sizing Guidelines",
                      id: "deploy/deployment-option/self-hosted/manual/sizing",
                    },
                  ]
                },
              ]
            },
            {
              type: "category",
              label: "Cloud",
              link: { type: "doc", id: "deploy/deployment-option/cloud/index" },
              items: [
                {
                  type: "doc",
                  label: "Redpanda Cloud Overview",
                  id: "deploy/deployment-option/cloud/dedicated-byoc",
                },
                {
                  type: "category",
                  label: "Redpanda Dedicated",

                  items: [
                    {
                      type: "doc",
                      label: "Create Clusters",
                      id: "deploy/deployment-option/cloud/create-dedicated-cloud-cluster-aws",
                    },
                    {
                      type: "doc",
                      label: "VPC Peering",
                      id: "deploy/deployment-option/cloud/vpc-peering",
                    },
                  ],
                },
                {
                  type: "doc",
                  label: "Create a BYOC Cluster on AWS",
                  id: "deploy/deployment-option/cloud/create-byoc-cluster-aws",
                },
                {
                  type: "doc",
                  label: "Create a BYOC Cluster on GCP",
                  id: "deploy/deployment-option/cloud/create-byoc-cluster-gcp",
                },
                {
                  type: "doc",
                  label: "Create a Topic",
                  id: "deploy/deployment-option/cloud/create-topic",
                },
                {
                  type: "category",
                  label: "Managed Connectors",
                  link: { type: "doc", id: "deploy/deployment-option/cloud/managed-connectors/index" },  
                  items: [
                    {
                      type: "doc",
                      label: "Create an S3 Sink Connector",
                      id: "deploy/deployment-option/cloud/managed-connectors/create-s3-sink-connector",
                    },
                  ],
                },
              ]
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Manage",
      link: { type: "doc", id: "manage/index" },
      items: [
              {
                type: "category",
                label: "Kubernetes",
                link: { type: "doc", id: "manage/kubernetes/index" },
                items: [
                  {
                    type: "doc",
                    label: "Helm Configuration",
                    id: "manage/kubernetes/helm-configuration",
                  },
                  {
                    type: "doc",
                    label: "Rack Awareness",
                    id: "manage/kubernetes/kubernetes-rack-awareness",
                  },
                  {
                    type: "category",
                    label: "Security",
                    link: { type: "doc", id: "manage/kubernetes/security/index" },
                    items: [
                      {
                        type: "doc",
                        label: "Configure TLS on Kubernetes",
                        id: "manage/kubernetes/security/kubernetes-tls",
                      },
                      {
                        type: "doc",
                        label: "Configure SASL on Kubernetes",
                        id: "manage/kubernetes/security/sasl-kubernetes",
                      },
                    ],
                  },
                  {
                    type: "doc",
                    label: "Configure Storage",
                    id: "manage/kubernetes/configure-storage",
                  },
                ],
              },
              {
                type: "category",
                label: "Cluster Maintenance",
                link: { type: "doc", id: "manage/cluster-maintenance/index" },
                items: [
                  "manage/cluster-maintenance/cluster-balancing",
                  {
                    type: "doc",
                    label: "Continuous Data Balancing",
                    id: "manage/cluster-maintenance/continuous-data-balancing",
                  },
                  {
                    type: "doc",
                    label: "Rolling Upgrades",
                    id: "manage/cluster-maintenance/rolling-upgrade",
                  },
                  "manage/cluster-maintenance/disk-utilization",
                  {
                    type: "doc",
                    label: "Cluster Properties",
                    id: "manage/cluster-maintenance/cluster-property-configuration",
                  },  
                ]
              },
              
              {
                type: "category",
                label: "Security",
                link: { type: "doc", id: "manage/security/index" },
                
                
                items: [
                  {
                    "type": "doc",
                    "label": "Authentication",
                    "id": "manage/security/authentication"
                  },
                  {
                    "type": "doc",
                    "label": "Authorization",
                    "id": "manage/security/authorization"
                  },
                  "manage/security/encryption",
                  "manage/security/listener-configuration",
                  {
                    "type": "category",
                    "label": "Redpanda Console Security",
                    link: { type: "doc", id: "manage/security/console/index" },
                    "items": [
                      {
                        "type": "doc",
                        "label": "Authentication",
                        "id": "manage/security/console/authentication"
                      },
                      {
                        "type": "doc",
                        "label": "Authorization",
                        "id": "manage/security/console/authorization"
                      },
                      {
                        "type": "doc",
                        "label": "GitHub",
                        "id": "manage/security/console/github"
                      },
                      {
                        "type": "doc",
                        "label": "Google",
                        "id": "manage/security/console/google"
                      },
                      {
                        "type": "doc",
                        "label": "Okta",
                        "id": "manage/security/console/okta"
                      },
                      {
                        "type": "doc",
                        "label": "Generic OIDC",
                        "id": "manage/security/console/generic-oidc"
                      }
                    ]
                  },
                  "manage/security/iam-roles",
                ],
              },
              {
                type: "category",
                label: "Tiered Storage",
                
                
                link: {
                  type: "doc",
                  id: "manage/tiered-storage",
                },
                items: [
                  {
                    type: "doc",
                    label: "Data Archiving",
                    id: "manage/data-archiving",
                  },
                ],
              },
              "manage/schema-registry",
              {
                type: "category",
                label: "Redpanda Console",
                link: { type: "doc", id: "manage/console/index" },
                items: [
                  "manage/console/kafka-connect",
                  "manage/console/schema-registry",
                  "manage/console/protobuf",
                  "manage/console/topic-documentation",
                  "manage/console/http-path-rewrites",
                ]
              },
              {
                type: "doc",
                label: "Node Maintenance Mode",
                id: "manage/node-management",
              },
              "manage/data-migration",
              {
                type: "doc",
                label: "Rack Awareness",
                id: "manage/rack-awareness",
              },
              "manage/remote-read-replicas",
              "manage/monitoring",
              "manage/io-optimization",
            ],
    },
    {
      type: "category",
      label: "Reference",
      link: { type: "doc", id: "reference/index" },
      
      
      items: [
        "reference/cluster-properties",
        "reference/tunable-properties",
        "reference/node-properties",
        "reference/node-configuration-sample",
        "reference/api-reference",
        {
          type: "category",
          label: "rpk Commands",
          link: { type: "doc", id: "reference/rpk/index" },
          items: [
            "reference/rpk/rpk-commands",
            {
              type: "category",
              label: "rpk acl",
              link: { type: "doc", id: "reference/rpk/rpk-acl/rpk-acl" },
              items: [
                "reference/rpk/rpk-acl/rpk-acl",
                "reference/rpk/rpk-acl/rpk-acl-create",
                "reference/rpk/rpk-acl/rpk-acl-delete",
                {
                  type: "category",
                  label: "rpk acl user",
                  link: {
                    type: "doc",
                    id: "reference/rpk/rpk-acl/rpk-acl-user",
                  },
                  items: [
                    "reference/rpk/rpk-acl/rpk-acl-user",
                    "reference/rpk/rpk-acl/rpk-acl-user-create",
                    "reference/rpk/rpk-acl/rpk-acl-user-delete",
                    "reference/rpk/rpk-acl/rpk-acl-user-list",
                  ],
                }, //acl user
              ],
            }, //acl
            {
              type: "category",
              label: "rpk cloud",
              link: {
                type: "doc",
                id: "reference/rpk/rpk-cloud/rpk-cloud",
              },
              items: [
                "reference/rpk/rpk-cloud/rpk-cloud",
                "reference/rpk/rpk-cloud/rpk-cloud-byoc",
                "reference/rpk/rpk-cloud/rpk-cloud-byoc-install",
                "reference/rpk/rpk-cloud/rpk-cloud-byoc-uninstall",
                "reference/rpk/rpk-cloud/rpk-cloud-login",
                "reference/rpk/rpk-cloud/rpk-cloud-logout"
              ]
            },
            {
              type: "category",
              label: "rpk cluster",
              link: {
                type: "doc",
                id: "reference/rpk/rpk-cluster/rpk-cluster",
              },
              items: [
                {
                  type: "category",
                  label: "rpk cluster config",
                  link: {
                    type: "doc",
                    id: "reference/rpk/rpk-cluster/rpk-cluster-config",
                  },
                  items: [
                    "reference/rpk/rpk-cluster/rpk-cluster-config",
                    "reference/rpk/rpk-cluster/rpk-cluster-config-edit",
                    "reference/rpk/rpk-cluster/rpk-cluster-config-export",
                    "reference/rpk/rpk-cluster/rpk-cluster-config-force-reset",
                    "reference/rpk/rpk-cluster/rpk-cluster-config-get",
                    "reference/rpk/rpk-cluster/rpk-cluster-config-import",
                    "reference/rpk/rpk-cluster/rpk-cluster-config-lint",
                    "reference/rpk/rpk-cluster/rpk-cluster-config-set",
                    "reference/rpk/rpk-cluster/rpk-cluster-config-status",
                  ],
                },
                "reference/rpk/rpk-cluster/rpk-cluster-health",
                {
                  type: "category",
                  label: "rpk cluster license",
                  link: {
                    type: "doc",
                    id: "reference/rpk/rpk-cluster/rpk-cluster-license",
                  },
                  items: [
                    "reference/rpk/rpk-cluster/rpk-cluster-license",
                    "reference/rpk/rpk-cluster/rpk-cluster-license-info",
                    "reference/rpk/rpk-cluster/rpk-cluster-license-set",
                  ],
                },
                {
                  type: "category",
                  label: "rpk cluster logdirs",
                  link: {
                    type: "doc",
                    id: "reference/rpk/rpk-cluster/rpk-cluster-logdirs",
                  },
                  items: [
                    "reference/rpk/rpk-cluster/rpk-cluster-logdirs",
                    "reference/rpk/rpk-cluster/rpk-cluster-logdirs-describe",
                  ],
                },
                {
                  type: "category",
                  label: "rpk cluster maintenance",
                  link: {
                    type: "doc",
                    id: "reference/rpk/rpk-cluster/rpk-cluster-maintenance",
                  },
                  items: [
                    "reference/rpk/rpk-cluster/rpk-cluster-maintenance",
                    "reference/rpk/rpk-cluster/rpk-cluster-maintenance-disable",
                    "reference/rpk/rpk-cluster/rpk-cluster-maintenance-enable",
                    "reference/rpk/rpk-cluster/rpk-cluster-maintenance-status",
                  ],
                },
                "reference/rpk/rpk-cluster/rpk-cluster-metadata",
                {
                  type: "category",
                  label: "rpk cluster partitions",
                  link: {
                    type: "doc",
                    id: "reference/rpk/rpk-cluster/rpk-cluster-partitions",
                  },
                  items: [
                    "reference/rpk/rpk-cluster/rpk-cluster-partitions",
                    "reference/rpk/rpk-cluster/rpk-cluster-partitions-balancer-status",
                    "reference/rpk/rpk-cluster/rpk-cluster-partitions-movement-cancel",
                  ],
                },
              ],
            }, //acl cluster
            {
              type: "category",
              label: "rpk container",
              link: {
                type: "doc",
                id: "reference/rpk/rpk-container/rpk-container",
              },
              items: [
                "reference/rpk/rpk-container/rpk-container",
                "reference/rpk/rpk-container/rpk-container-purge",
                "reference/rpk/rpk-container/rpk-container-start",
                "reference/rpk/rpk-container/rpk-container-stop",
              ],
            },
            {
              type: "category",
              label: "rpk debug",
              link: {
                type: "doc",
                id: "reference/rpk/rpk-debug/rpk-debug",
              },
              items: [
                "reference/rpk/rpk-debug/rpk-debug",
                "reference/rpk/rpk-debug/rpk-debug-bundle",
              ],
            },
            {
              type: "category",
              label: "rpk generate",
              link: {
                type: "doc",
                id: "reference/rpk/rpk-generate/rpk-generate",
              },
              items: [
                "reference/rpk/rpk-generate/rpk-generate",
                "reference/rpk/rpk-generate/rpk-generate-grafana-dashboard",
                "reference/rpk/rpk-generate/rpk-generate-prometheus-config",
                "reference/rpk/rpk-generate/rpk-generate-shell-completion",
              ],
            },
            {
              type: "category",
              label: "rpk group",
              link: {
                type: "doc",
                id: "reference/rpk/rpk-group/rpk-group",
              },
              items: [
                "reference/rpk/rpk-group/rpk-group",
                "reference/rpk/rpk-group/rpk-group-delete",
                "reference/rpk/rpk-group/rpk-group-describe",
                "reference/rpk/rpk-group/rpk-group-list",
                "reference/rpk/rpk-group/rpk-group-seek",
              ],
            },
            "reference/rpk/rpk-help",
            "reference/rpk/rpk-iotune",
            {
              type: "category",
              label: "rpk plugin",
              link: {
                type: "doc",
                id: "reference/rpk/rpk-plugin/rpk-plugin",
              },
              items: [
                "reference/rpk/rpk-plugin/rpk-plugin",
                "reference/rpk/rpk-plugin/rpk-plugin-list",
                "reference/rpk/rpk-plugin/rpk-plugin-uninstall",
                "reference/rpk/rpk-plugin/rpk-plugin-install",
              ],
            },
            {
              type: "category",
              label: "rpk redpanda",
              link: {
                type: "doc",
                id: "reference/rpk/rpk-redpanda/rpk-redpanda",
              },
              items: [
                "reference/rpk/rpk-redpanda/rpk-redpanda",
                {
                  type: "category",
                  label: "rpk redpanda admin",
                  link: {
                    type: "doc",
                    id: "reference/rpk/rpk-redpanda/rpk-redpanda-admin",
                  },
                  items: [
                    "reference/rpk/rpk-redpanda/rpk-redpanda-admin",
                    {
                      type: "category",
                      label: "rpk redpanda admin brokers",
                      link: {
                        type: "doc",
                        id: "reference/rpk/rpk-redpanda/rpk-redpanda-admin-brokers",
                      },
                      items: [
                        "reference/rpk/rpk-redpanda/rpk-redpanda-admin-brokers",
                        "reference/rpk/rpk-redpanda/rpk-redpanda-admin-brokers-decommission",
                        "reference/rpk/rpk-redpanda/rpk-redpanda-admin-brokers-list",
                        "reference/rpk/rpk-redpanda/rpk-redpanda-admin-brokers-recommission",
                      ],
                    },
                    {
                      type: "category",
                      label: "rpk redpanda admin config",
                      link: {
                        type: "doc",
                        id: "reference/rpk/rpk-redpanda/rpk-redpanda-admin-config",
                      },
                      items: [
                        "reference/rpk/rpk-redpanda/rpk-redpanda-admin-config",
                        "reference/rpk/rpk-redpanda/rpk-redpanda-admin-config-log-level-set",
                        "reference/rpk/rpk-redpanda/rpk-redpanda-admin-config-log-level",
                        "reference/rpk/rpk-redpanda/rpk-redpanda-admin-config-print",
                      ],
                    },
                    {
                      type: "category",
                      label: "rpk redpanda admin partitions",
                      link: {
                        type: "doc",
                        id: "reference/rpk/rpk-redpanda/rpk-redpanda-admin-partitions",
                      },
                      items: [
                        "reference/rpk/rpk-redpanda/rpk-redpanda-admin-partitions",
                        "reference/rpk/rpk-redpanda/rpk-redpanda-admin-partitions-list",
                      ],
                    },
                  ],
                }, //rpk redpanda admin
                "reference/rpk/rpk-redpanda/rpk-redpanda-check",
                {
                  type: "category",
                  label: "rpk redpanda config",
                  link: {
                    type: "doc",
                    id: "reference/rpk/rpk-redpanda/rpk-redpanda-config",
                  },
                  items: [
                    "reference/rpk/rpk-redpanda/rpk-redpanda-config",
                    "reference/rpk/rpk-redpanda/rpk-redpanda-config-bootstrap",
                    "reference/rpk/rpk-redpanda/rpk-redpanda-config-init",
                    "reference/rpk/rpk-redpanda/rpk-redpanda-config-set",
                  ],
                },
                "reference/rpk/rpk-redpanda/rpk-redpanda-mode",
                "reference/rpk/rpk-redpanda/rpk-redpanda-start",
                "reference/rpk/rpk-redpanda/rpk-redpanda-stop",
                {
                  type: "category",
                  label: "rpk redpanda tune",
                  link: {
                    type: "doc",
                    id: "reference/rpk/rpk-redpanda/rpk-redpanda-tune",
                  },
                  items: [
                    "reference/rpk/rpk-redpanda/rpk-redpanda-tune",
                    "reference/rpk/rpk-redpanda/rpk-redpanda-tune-help",
                    "reference/rpk/rpk-redpanda/rpk-redpanda-tune-list",
                  ],
                },
              ],
            }, //rpk redpanda
            {
              type: "category",
              label: "rpk topic",
              link: { type: "doc", id: "reference/rpk/rpk-topic/rpk-topic" },
              items: [
                "reference/rpk/rpk-topic/rpk-topic",
                "reference/rpk/rpk-topic/rpk-topic-add-partitions",
                "reference/rpk/rpk-topic/rpk-topic-alter-config",
                "reference/rpk/rpk-topic/rpk-topic-consume",
                "reference/rpk/rpk-topic/rpk-topic-create",
                "reference/rpk/rpk-topic/rpk-topic-delete",
                "reference/rpk/rpk-topic/rpk-topic-describe",
                "reference/rpk/rpk-topic/rpk-topic-list",
                "reference/rpk/rpk-topic/rpk-topic-produce",
              ],
            },
            "reference/rpk/rpk-version",
            {
              type: "category",
              label: "rpk wasm",
              link: { type: "doc", id: "reference/rpk/rpk-wasm/rpk-wasm" },
              items: [
                "reference/rpk/rpk-wasm/rpk-wasm",
                "reference/rpk/rpk-wasm/rpk-wasm-deploy",
                "reference/rpk/rpk-wasm/rpk-wasm-generate",
                "reference/rpk/rpk-wasm/rpk-wasm-remove",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Redpanda Operator",
          link: { type: "doc", id: "reference/redpanda-operator/index" },
          items: [
            {
              type: "category",
              label: "Install",
              items: [
                "reference/redpanda-operator/kubernetes-qs-local-access",
                "reference/redpanda-operator/kubernetes-qs-minikube",
                "reference/redpanda-operator/kubernetes-qs-cloud",
              ],
            },
            {
              type: "category",
              label: "Deploy",
              items: [
                "reference/redpanda-operator/kubernetes-connectivity",
                "reference/redpanda-operator/kubernetes-external-connect",
                "reference/redpanda-operator/kubernetes-additional-config",
                "reference/redpanda-operator/arbitrary-configuration",
              ],
            },
            {
              type: "category",
              label: "Security",
              items: [
                "reference/redpanda-operator/security-kubernetes",
                "reference/redpanda-operator/tls-kubernetes",
                "reference/redpanda-operator/kubernetes-sasl",
                "reference/redpanda-operator/kubernetes-mtls",
              ],
            },
            "reference/redpanda-operator/crd",
          ],
        },
        "reference/internal-metrics",
        {
          type: "link",
          label: "Release Notes",
          href: "https://github.com/redpanda-data/redpanda/releases",
        },
        {
          type: "category",
          label: "Redpanda Console",

          items: [
            {
              type: "doc",
              label: "Redpanda Console Configuration",
              id: "reference/console/config",
            },
            {
              type: "doc",
              label: "Redpanda Console Role-Binding Configuration",
              id: "reference/console/role-bindings",
            },
            {
              type: "doc",
              label: "Docker Compose Templates",
              id: "reference/console/docker-compose",
            },
            "reference/console/record-deserialization",
            "reference/console/programmable-push-filters",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Labs",
      link: { type: "doc", id: "labs/index" },
      
      
      items: ["labs/install-preview", "labs/data-transform"],
    },
  ],
};
