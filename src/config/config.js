module.exports = {
    "API": {
        "HTTPHeaders": {}
    },
    "Addresses": {
        "API": "/ip4/127.0.0.1/tcp/5009",
        "Announce": [],
        "Gateway": "/ip4/127.0.0.1/tcp/8089",
        "NoAnnounce": [],
        "Swarm": [
            "/ip4/0.0.0.0/tcp/4009",
            "/ip6/::/tcp/4009",
            "/ip4/0.0.0.0/udp/4009/quic",
            "/ip6/::/udp/4009/quic"
        ]
    },
    "AutoNAT": {},
    "Bootstrap": [
        "/dnsaddr/bootstrap.libp2p.io/p2p/QmbLHAnMoJPWSCR5Zhtx6BHJX9KiKNN6tpvbUcqanj75Nb",
        "/dnsaddr/bootstrap.libp2p.io/p2p/QmcZf59bWwK5XFi76CZX8cbJ4BhTzzA3gU1ZjYZcYW3dwt",
        "/ip4/104.131.131.82/tcp/4001/p2p/QmaCpDMGvV2BGHeYERUEnRQAwe3N8SzbUtfsmvsqQLuvuJ",
        "/ip4/104.131.131.82/udp/4001/quic/p2p/QmaCpDMGvV2BGHeYERUEnRQAwe3N8SzbUtfsmvsqQLuvuJ",
        "/dnsaddr/bootstrap.libp2p.io/p2p/QmNnooDu7bfjPFoTZYxMNLWUQJyrVwtbZg5gBMjTezGAJN",
        "/dnsaddr/bootstrap.libp2p.io/p2p/QmQCU2EcMqAqQPR2i9bChDtGNJchTbq5TbXJJ16u19uLTa"
    ],
    "DNS": {
        "Resolvers": {}
    },
    "Datastore": {
        "BloomFilterSize": 0,
        "GCPeriod": "1h",
        "HashOnRead": false,
        "Spec": {
            "mounts": [
                {
                    "child": {
                        "path": "blocks",
                        "shardFunc": "/repo/flatfs/shard/v1/next-to-last/2",
                        "sync": true,
                        "type": "flatfs"
                    },
                    "mountpoint": "/blocks",
                    "prefix": "flatfs.datastore",
                    "type": "measure"
                },
                {
                    "child": {
                        "compression": "none",
                        "path": "datastore",
                        "type": "levelds"
                    },
                    "mountpoint": "/",
                    "prefix": "leveldb.datastore",
                    "type": "measure"
                }
            ],
            "type": "mount"
        },
        "StorageGCWatermark": 90,
        "StorageMax": "10GB"
    },
    "Discovery": {
        "MDNS": {
            "Enabled": true,
            "Interval": 10
        }
    },
    "Experimental": {
        "AcceleratedDHTClient": false,
        "FilestoreEnabled": false,
        "GraphsyncEnabled": false,
        "Libp2pStreamMounting": false,
        "P2pHttpProxy": false,
        "ShardingEnabled": false,
        "StrategicProviding": false,
        "UrlstoreEnabled": false
    },
    "Gateway": {
        "APICommands": [],
        "HTTPHeaders": {
            "Access-Control-Allow-Headers": [
                "X-Requested-With",
                "Range",
                "User-Agent"
            ],
            "Access-Control-Allow-Methods": [
                "GET"
            ],
            "Access-Control-Allow-Origin": [
                "*"
            ]
        },
        "NoDNSLink": false,
        "NoFetch": false,
        "PathPrefixes": [],
        "PublicGateways": null,
        "RootRedirect": "",
        "Writable": false
    },
    // "Identity": {
    //     "PeerID": "12D3KooWH2dyahToNqYewWAxhyUWcy6Zp8ZS5ECZmZX9Z5EJCigw"
    // },
    "Ipns": {
        "RecordLifetime": "",
        "RepublishPeriod": "",
        "ResolveCacheSize": 128
    },
    "Migration": {
        "DownloadSources": [],
        "Keep": ""
    },
    "Mounts": {
        "FuseAllowOther": false,
        "IPFS": "/ipfs",
        "IPNS": "/ipns"
    },
    "Peering": {
        "Peers": null
    },
    "Pinning": {
        "RemoteServices": {}
    },
    "Plugins": {
        "Plugins": null
    },
    "Provider": {
        "Strategy": ""
    },
    "Pubsub": {
        "DisableSigning": false,
        "Router": ""
    },
    "Reprovider": {
        "Interval": "12h",
        "Strategy": "all"
    },
    "Routing": {
        "Type": "dhtserver"
    },
    "Swarm": {
        "AddrFilters": null,
        "ConnMgr": {
            "GracePeriod": "300s",
            "HighWater": 300,
            "LowWater": 50,
            "Type": "basic"
        },
        "DisableBandwidthMetrics": false,
        "DisableNatPortMap": false,
        "EnableAutoRelay": false,
        "EnableRelayHop": false,
        "Transports": {
            "Multiplexers": {},
            "Network": {},
            "Security": {}
        }
    }
}