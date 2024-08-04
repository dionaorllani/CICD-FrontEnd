provider "google" {
  project = var.project_id
  region  = var.region
  credentials = file("${path.module}/rational-symbol-431015-u0-fb398358b382.json")
}

variable "project_id" {
  description = "The GCP project ID"
  type        = string
  default     = "rational-symbol-431015-u0"
}

variable "region" {
  description = "The GCP region"
  type        = string
  default     = "europe-west4-a" // You can set this to your preferred region
}

variable "cluster_name" {
  description = "The name of the GKE cluster"
  type        = string
  default     = "frontend"
}

variable "node_count" {
  description = "Number of nodes in the node pool"
  type        = number
  default     = 1
}

variable "node_machine_type" {
  description = "Machine type for the nodes"
  type        = string
  default     = "e2-medium"
}

variable "network_name" {
  description = "The name of the VPC network"
  type        = string
  default     = "default"
}

resource "google_container_cluster" "primary" {
  name               = var.cluster_name
  location           = var.region
  initial_node_count = 1

  node_config {
    machine_type = var.node_machine_type
  }

  # For public access, configure firewall rules and network settings accordingly
}

resource "google_container_node_pool" "primary_nodes" {
  cluster    = google_container_cluster.primary.name
  location   = google_container_cluster.primary.location
  name       = "primary-node-pool"
  node_count = 1

  node_config {
    machine_type = var.node_machine_type
  }
}


output "kubernetes_cluster_name" {
  description = "The name of the GKE cluster"
  value       = google_container_cluster.primary.name
}

output "kubernetes_cluster_endpoint" {
  description = "The endpoint of the GKE cluster"
  value       = google_container_cluster.primary.endpoint
}

output "kubernetes_cluster_master_version" {
  description = "The master Kubernetes version of the GKE cluster"
  value       = google_container_cluster.primary.master_version
}