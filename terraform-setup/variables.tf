variable "instance_type" {
  description = "EC2 instance type"
  default     = "t2.micro"
}

variable "ami_id" {
  description = "Amazon Machine Image (AMI) for Ubuntu"
  default     = "ami-0a89fa9a6d8c7ad98" 
}

variable "key_name" {
  description = "Name of the SSH key pair"
  default     = "Automation_DevOps_Pipeline"
}

variable "security_group_id" {
  description = "Existing Security Group ID for EC2"
  default     = "sg-0709de0ec0d9db063"  # Replace with actual Security Group ID
}  