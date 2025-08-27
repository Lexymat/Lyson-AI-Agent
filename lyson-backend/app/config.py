"""
Configuration settings for Lyson Backend
Uses Pydantic Settings for type-safe environment variable management
"""

from typing import List
from pydantic import Field
from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    """Application settings loaded from environment variables"""
    
    # ========== Google Workspace API Configuration ==========
    google_client_id: str = Field(..., description="Google OAuth2 Client ID")
    google_client_secret: str = Field(..., description="Google OAuth2 Client Secret")
    google_redirect_uri: str = Field(
        default="http://localhost:8000/auth/callback",
        description="Google OAuth2 redirect URI"
    )
    
    # ========== OpenAI Configuration ==========
    openai_api_key: str = Field(..., description="OpenAI API key for LLM processing")
    
    # ========== Redis Configuration ==========
    redis_url: str = Field(
        default="redis://localhost:6379",
        description="Redis connection URL for session storage"
    )
    
    # ========== Security Configuration ==========
    secret_key: str = Field(..., description="Secret key for JWT tokens")
    algorithm: str = Field(default="HS256", description="JWT algorithm")
    access_token_expire_minutes: int = Field(
        default=60,
        description="JWT token expiry time in minutes"
    )
    
    # ========== Application Configuration ==========
    debug: bool = Field(default=False, description="Debug mode flag")
    environment: str = Field(default="production", description="Environment name")
    cors_origins: List[str] = Field(
        default=["http://localhost:3000", "http://localhost:8000"],
        description="Allowed CORS origins"
    )
    
    # ========== Report Configuration ==========
    report_expiry_hours: int = Field(
        default=1,
        description="Report URL expiry time in hours"
    )
    max_licenses_per_request: int = Field(
        default=1000,
        description="Maximum licenses to process per request"
    )
    
    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"
        case_sensitive = False


# Global settings instance
settings = Settings()


