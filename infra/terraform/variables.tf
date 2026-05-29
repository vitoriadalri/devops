variable "aws_region" {
  description = "Regiao da AWS onde os recursos serao provisionados."
  type        = string
  default     = "us-east-1"
}

variable "project_name" {
  description = "Nome do projeto usado para identificar os recursos."
  type        = string
  default     = "devops-fase1"
}

variable "environment" {
  description = "Ambiente do projeto."
  type        = string
  default     = "dev"
}
