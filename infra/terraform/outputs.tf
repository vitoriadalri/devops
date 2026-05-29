output "artifacts_bucket_name" {
  description = "Nome do bucket S3 criado para armazenar artefatos do projeto."
  value       = aws_s3_bucket.artifacts.bucket
}
