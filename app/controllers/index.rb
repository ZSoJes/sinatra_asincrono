get '/' do
  @abuelita = params[:abuelita]

   erb :index
  # Visita app/views/index.erb
end


# post '/abuelita' do
#   user_input = params[:user_input]
# end

post '/abuelita' do
  #@abuelita = params[:abuelita]
  puts params[:abuelita]

  if params[:abuelita] == "BYE"
    @abuelita = "OK HIJO, PERO NO CORRAS MUCHO"

  elsif params[:abuelita] =~ /[A-Z]/ and params[:abuelita] =~ /[a-z]/
    @abuelita = "HUH?! NO TE ESCUCHO, HIJO!"

  elsif params[:abuelita] =~ /[A-Z]/
     @abuelita = "NO TE ENTIENDO HIJO"

  elsif params[:abuelita] =~ /[a-z]/
     @abuelita = "NO, NO DESDE 1983"
  end

  # erb :index
  # Visita app/views/index.erb
end
