RailsApiAuth.tap do |raa|
  # Turn off SSL redirection in development
  raa.force_ssl = false if Rails.env.development?
end
